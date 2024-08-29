const Add = () => {
    const text = document.getElementById("text");//존재하는 태그의 아이디를 불러올 때는 getElementById document.querySelector("#text");
    const li = document.createElement("li");//만들지 않은(존재하지 않는) 태그를 만들 떄는 createElement
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text.value;
    //ul 태그안에 들어갈 요소들을 만들고 text 아이디를 가진 값을 p태그에 넣어줌
    
    document.getElementById("memo").appendChild(li);
    text.value="";
    
    //text 아이디의 값을 공백으로 초기화해줌
    const button = document.createElement("button");
    button.textContent="삭제"
    button.addEventListener("click",() =>{
        const deleteTarget = button.closest("li");//button과 가장 가까운 li태그를 반환
        document.getElementById("memo").removeChild(deleteTarget);
    });
    //각 li 태그에 부여한 버튼을 활용해서 가장 근접한 li 태그를 삭제하는 형태의 액션을 부여(각각 삭제)

    const deleteli = document.getElementById("delete-text");
    deleteli.addEventListener("click",() =>{
        document.getElementById("memo").removeChild(li);
    })
    //만들어 둔 버튼의 아이디를 통해 액션 부여
    
    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);//=> <li><div><p></p><button></button></div></li>의 형태를 나타냄
    
}

document.getElementById("add-text").addEventListener("click",() => Add());