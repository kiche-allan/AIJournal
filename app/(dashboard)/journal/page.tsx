
const getEntries = async () => {
    const user = await currentUser()
    const entries = await prisma.entry.findMany({
        where: {
            userId: user.id as string,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    })

}
const JournalPage = () => {
    return <div>Journal</div>
    
}

export default JournalPage
