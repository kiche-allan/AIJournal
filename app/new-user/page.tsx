import {prisma} from "@utils/db"
import {auth} from "@clerk/nextjs"


const createNewUser = () => {
    const {userId} = await auth()
    const match = await prisma.user.findUnique({
        where: {
            clerkid: userId as String, 
        }
    })
}
const NewUser = () => {
    return <div></div>
}

export default NewUser