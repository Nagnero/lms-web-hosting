
async function upload() {
    let myForm = document.getElementById("FormId");
    let inputName = myForm.elements[0].value
    let inputEmail = myForm.elements[1].value
    let inputContent = myForm.elements[3].value
    let inputData = {};
    inputData["userName"] = myForm.elements[0].value
    inputData["userEmail"] = myForm.elements[1].value
    inputData["intro"] = myForm.elements[2].value
    inputData["content"] = myForm.elements[3].value

    const userUpload = async () => {
        const response = await fetch(
            'https://umcserver.shop/inquire', 
        {
            method: 'POST',
            body: JSON.stringify(inputData)
        })
        const data = await response.json()
        alert(data.message)
        return data
    }    

    if(inputEmail === '' || inputName === '') {
        alert("필수입력란을 입력하세요.")
    } else if(inputContent === '') {
        alert("내용을 입력해주세요.")
    } else {
        userUpload()
    }
    
}

