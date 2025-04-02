import {ID,Client,Account} from "appwrite"
import Config from "react-native-config"
import Snackbar from "react-native-snackbar"

const appwrite= new Client()

const APPWRITE_ENDPOINT: string=Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECT: string=Config.APPWRITE_PROJECT_ID!

type createUser={
    email: string,
    password: string,
    name: string,
}

type loginUser={
    email: string,
    password: string,
    name?: string,
}

class AppwriteService{

    account;
    constructor(){
        appwrite.setEndpoint(APPWRITE_ENDPOINT)
        appwrite.setProject(APPWRITE_PROJECT)
        this.account=new Account(appwrite)
    }

    async createAccount({name,email,password}: createUser){
        try{
             const userAccount = await this.account.create(ID.custom('user-' + Date.now()),email,password,name)
            if(userAccount){
               return this.login({email,password})
                 }
            else{
               return userAccount
                 }
        }
        catch(error){
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("AppwriteService -> createAccount -> error", error)
        }
    }

    async login({email,password}: loginUser){
        try{
            return    await this.account.createSession(email,password)
        }
        catch(error){
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("AppwriteService -> login -> error", error)
        }
    }

    async getCurrentUser(){
        try{
           return await this.account.get()
        }
        catch(error){
            console.log("this is currentUser error",error)
        }
    }

    async logout (){
        try{
               this.account.deleteSession("current")
        }
        catch(error){
            console.log("logout error",error)
        }
    }
}

export default AppwriteService