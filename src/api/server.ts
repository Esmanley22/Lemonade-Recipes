
const token= '7eb1d541c874c361185ad116c2b028adf69ada0be35d4800'
//'x-access-token': `Bearer ${token}`,


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://brazen-carnelian-text.glitch.me/api/lemonades`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://brazen-carnelian-text.glitch.me/api/lemonades`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server/api/lemonades')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://brazen-carnelian-text.glitch.me/api/lemonades/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://brazen-carnelian-text.glitch.me/api/lemonades/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return
    },
}