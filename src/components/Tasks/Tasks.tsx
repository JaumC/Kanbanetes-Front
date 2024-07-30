import './Tasks.css'

export function Tasks(){
    return(
        <div className='tasksContainer'>
            <img src="../src/assets/ImageProject.png" alt="" />
            <div className='statusBoard'>
                <div id='to-do' className='status'>
                    <div id='to-do-div'>
                        <img src="../src/assets/TodoIcon.svg" alt="" />
                        <p>To-do</p>
                    </div>
                    <img src="../src/assets/AddTask.svg" alt="" />
                </div>

                <div id='doing' className='status'>
                    <div id='doing-div'>
                        <img src="../src/assets/DoingIcon.svg" alt="" />
                        <p>Doing</p>
                    </div>
                    <img src="../src/assets/AddTask.svg" alt="" />
                </div>

                <div id='testing' className='status'>
                    <div id='test-div'>
                        <img src="../src/assets/TestIcon.svg" alt="" />
                        <p>Testing</p>
                    </div>
                    <img src="../src/assets/AddTask.svg" alt="" />
                </div>

                <div id='done' className='status'>
                    <div id='done-div'>
                        <img src="../src/assets/DoneIcon.svg" alt="" />
                        <p>Done</p>
                    </div>
                    <img src="../src/assets/AddTask.svg" alt="" />
                </div>
            </div>
        </div>
    )
}