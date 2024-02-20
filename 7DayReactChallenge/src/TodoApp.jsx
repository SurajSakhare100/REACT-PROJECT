import React from 'react'

function TodoApp() {
  return (
    <>
<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            
        </div>
        <div>
           ffs
          	<div class="flex mb-4 items-center">
                <p class="w-full line-through text-green">Submit Task</p>
                <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
        </div>
    </div>
</div> 
    </>
  )
}

export default TodoApp
