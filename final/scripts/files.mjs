
export async function getDataFromFile(fileName){
    try{
        const response = await fetch(fileName);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`An error loading the file: ${error}`)
        return [];
    }
}

export async function getCustomers(){
    const customerPath = "data/customers.json";
    return await getDataFromFile(customerPath);
}

export async function getProducts(){
    const customerPath = "data/products.json";
    return await getDataFromFile(customerPath);
}