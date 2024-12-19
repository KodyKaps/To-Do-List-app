export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';


function newItem(){

  store.dispatch(addTodo('Dispatch my first action'));
  console.log('State after adding first todo', store.getState());

    
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
    
  if (inputValue === '') {
    alert("You must write something!");
       } else {
          let list = document.querySelector('#list');
          list.appendChild(li);
        }
  
          function crossOut() {
                li.classList.toggle("strike");
            }
    
         li.addEventListener("dblclick",crossOut);
    
          let crossOutButton = document.createElement("crossOutButton");
          crossOutButton.appendChild(document.createTextNode("X"));
          li.appendChild(crossOutButton);
      
          crossOutButton.addEventListener("click", deleteListItem);
          function deleteListItem(){
             li.classList.add("delete")
              }
                $('#list').sortable();
    
                }
    