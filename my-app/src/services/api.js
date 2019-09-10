
    async function getLeads() {
        const res = await fetch('http://localhost:3001/showLeads').then(response => response.json());
        return res ;
    }

export default getLeads