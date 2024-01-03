import {prisma} from '@utils/db'
import {auth} from '@clerk/nextjs'


const createNewUser = async() => {
    const user = await currentUser()
    const match = await prisma.user.findUnique({
        where: {
            clerkId: user.id as String, 
        },
    })

    if (!match) {
       const user =  await prisma.user.create({
        data: {
            ClerkId:user.id,
            email: userAgent.email

        }
       })
    }
}
const NewUser = () => {
    return <div></div>
}

export default NewUser