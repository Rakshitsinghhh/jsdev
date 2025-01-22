let current = true;

let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('reset');

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("clicked");
        if (box.innerText === '') {
            if (current) {
                box.innerText = 'X';
                current = false;


            } else {
                box.innerText = 'O';
                current = true;
            }
        }
        winner();

    });

});

reset.addEventListener('click',()=>{
    console.log('reset')
    boxes.forEach((box)=>
    {
        box.innerText="";
    });
    current=true;
});

const winner=()=>
{
    for(let pattern of winPattern)
    {
        // console.log(pattern[0],pattern,[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3 && pos3==pos1)
            {
                let ans=pos1;
                alert('winner is '+ans);
                reseter();
            }

        }
    }
}

const reseter=() =>
{
    boxes.forEach((box)=>
    {
        box.innerText="";

    });
    current=true;
};
