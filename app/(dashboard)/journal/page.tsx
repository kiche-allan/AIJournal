import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntries = async () => {
    const user = await getUserByClerkID()
    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    return entries

}
const JournalPage = () => {
    const entries = getEntries()
    return <div></div>
    
}

export default JournalPage
