import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component{
    render(){
        return(
        <div>
            <Movie {...{name: 'Shang-Chi', img: './imgs/shangchi.jpg', 
            synopsis: 'Martial-arts master Shang-Chi confronts the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.'}} />
            <Movie {...{name: 'Cry Macho', img: './imgs/crymacho.jpg', 
            synopsis: `A onetime rodeo star and washed-up horse breeder, in 1978, takes a job from an ex-boss to bring the man's young son home and away from his alcoholic mum. Crossing rural Mexico on their back way to Texas, the unlikely pair faces an unexpectedly challenging journey, during which the world-weary horseman may find his own sense of redemption through teaching the boy what it means to be a good man.`}} />
            <Movie {...{name: 'Venom: Let There Be Carnage', img: './imgs/venom.jpg', 
            synopsis: 'Venom springs into action when notorious serial killer Cletus Kasady transforms into the evil Carnage.'}} />
        </div>
        );
    }
}