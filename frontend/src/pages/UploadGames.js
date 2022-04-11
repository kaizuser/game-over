import { useState } from "react";
import { connect } from 'react-redux'
import gamesActions from "../redux/actions/gamesActions";

function UploadGames(props){

    const [files, setFiles] = useState([])

    async function handleSubmit(event){
        event.preventDefault()

        const file = await files[0]
        const fileOne = await files[1]
        const fileTwo = await files[2]
        const fileThree = await files[3]
        const fileFour = await files[4]

        const name = await event.target[0].value
        const genre = await event.target[1].value
        const size = await event.target[2].value
        const workson = await event.target[3].value
        const company = await event.target[4].value
        const description = await event.target[5].value
        const processor = await event.target[6].value
        const memory = await event.target[7].value
        const graphics = await event.target[8].value
        const storage = await event.target[9].value
        const price = await event.target[10].value

        const formData = new FormData()
        formData.append('name', name)
        formData.append('genre', genre)
        formData.append('size', size)
        formData.append('workson', workson)
        formData.append('company', company)
        formData.append('description', description)
        formData.append('processor', processor) 
        formData.append('memory', memory) 
        formData.append('graphics', graphics) 
        formData.append('storage', storage) 
        formData.append('price', price)
        formData.append('file', file)
        formData.append('file', fileOne)
        formData.append('file', fileTwo)
        formData.append('file', fileThree)
        formData.append('file', fileFour)


        props.uploadGames(formData)

        console.log(formData.get('file'))
    }  

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <input name='name' placeholder="Game's name" type='text'/>
                </div>

                <div>
                    <input name='genre' placeholder="Game's genre" type='text'/>
                </div>

                <div>
                    <input name='size' placeholder="Game's size" type='number'/>
                </div>

                <div>
                    <input name='workson' placeholder="Works on" type='text'/>
                </div>

                <div>
                    <input name='company' placeholder="Game's company" type='text'/>
                </div>

                <div>
                    <input name='description' placeholder="Game's description" type='text'/>
                </div>

                <div>
                    <input name='processor' placeholder="System's processor" type='text'/>
                </div>

                <div>
                    <input name='memory' placeholder="System's memory" type='number'/>
                </div>

                <div>
                    <input name='graphics' placeholder="System's graphics" type='text'/>
                </div>

                <div>
                    <input name='storage' placeholder="System's storage" type='number'/>
                </div>

                <div>
                    <input name='price' placeholder="Game's price" type='number'/>
                </div>

                <div>
                    <input onChange={(event)=>setFiles([...files, ...event.target.files])} name='src' placeholder="Game's img" type='file'/>
                </div>

                <div>
                    <input onChange={(event)=>setFiles([...files, ...event.target.files])} name='src' placeholder="First img" type='file'/>
                </div>

                <div>
                    <input onChange={(event)=>setFiles([...files, ...event.target.files])} name='src' placeholder="Second img" type='file'/>
                </div>

                <div>
                    <input onChange={(event)=>setFiles([...files, ...event.target.files])} name='src' placeholder="Three img" type='file'/>
                </div>

                <div>
                    <input onChange={(event)=>setFiles([...files, ...event.target.files])} name='src' placeholder="Four img" type='file'/>
                </div>

                <div>
                    <button type='submit'>Upload game</button>
                </div>
            </form>
        </div>


    )



}

const mapDispatchToProps = {
    uploadGames: gamesActions.uploadGames
}

const mapStateToProps = (state) => {
    return {
        games: state.gamesReducer.games,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadGames)