import style from './Main.module.css'


export function Main(){

    return(
        <>
            <div className={style.topPage}>
                <h1>Kanbanetes</h1>
                <p>Kanbanetes is a free and light kanban board tool for your personal or professional use!</p>
            </div>

            <div className={style.imageFull}>
                <img src="src/assets/ImageFull.png" alt="" />
            </div>

            <div className={style.middleText}>
                <p>Kanbanetes is your free and light kanban board for personal and professional use, it is an easy and fast tool that assists you to be more productive and to have more control of your tasks and</p>
            </div>

            <div className={style.containerBottom}>
                <div className={style.imageSingle}>
                    <img src="src/assets/ImageSingle.png" alt="" />
                </div>

                <div className={style.sideText}>
                    <h2>Our vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et ante at, commodo iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim massa.</p>
                </div>
            </div>
        </>
    )
}
