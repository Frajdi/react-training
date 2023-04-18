
const useWork = (setFormData) => {
    
    
    const currencies = [
        {
            id: "1",
            value: "euro",
            label: "€"
        },
        {
            id: '2',
            value: 'dollar',
            label: '$'
        },
        {
            id: '3',
            value: 'bitcoin',
            label: '฿'
        },
        {
            id: '4',
            value: 'lek',
            label: 'L'
        }
    ]
  
    const handleCurrency = (event) => {
        setFormData((prev => { return { ...prev, work: { ...prev.work, currency: event.target.value } } }))
    }

    const handleCompanyName = (e) => {
        setFormData((prev => { return { ...prev, work: { ...prev.work, companyName: e.target.value } } }))
    }

    const handleJobPosition = (e) => {
        setFormData((prev => { return { ...prev, work: { ...prev.work, jobPosition: e.target.value } } }))
    }

    const handleSalary = (e) => {
        setFormData((prev => { return { ...prev, work: { ...prev.work, salary: e.target.value } } }))
    }

    return {
        currencies,
        handleCurrency,
        handleCompanyName,
        handleJobPosition,
        handleSalary
    }
}

export default useWork;