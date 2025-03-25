import { Inngest } from "inngest";
import connectDB from "./db";
import { User } from "@clerk/express";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

//function that will help us to syncthe user creation
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event : 'clerk/user.created'
    },

    async ({event}) => {
        //to destructure the event we are using the curly braces
        //provide the event
        //destructur thr properties of user 

        const { id, first_name, last_name, email_addresses, image_url } = event.data
        //store the object in the db
        const userData = {
            _id: id,
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    }
) 


//sync the user updation

export const syncUserUpdation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event : 'clerk/user.updated'
    },

    async ({event}) => {
        
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        //store the object in the db
        const userData = {
            _id: id,
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

//delete

export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
    {
        event : 'clerk/user.deleted'
    },

    async ({event}) => {
        
        const { id } = event.data
        //store the object in the db
        await connectDB()
        await User.findByIdAndDelete(id)
    }

    
)