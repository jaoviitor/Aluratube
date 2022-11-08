import config from "../aluratube-config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage(){
    
    //console.log(config.playlists);
    
    return(
        <>
            <CSSReset></CSSReset>
            <div>
                <Menu></Menu>
                <Header></Header>
                <Timeline playlists={config.playlists}></Timeline>
            </div>
        </>
    );
}
//outro jeito de fazer
function HomePage2(){
    const mensagem = "Bem vindo ao Aluratube!"
    const corBackground = {backgroundColor: "purple"};
    return(
        <div style={corBackground}>{mensagem}</div>
    )
}
export default HomePage;

/*function Menu(){
    return(
        <div>
            Menu
        </div>
    )
}*/


const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header(){
    return(
        <StyledHeader>
            {/*<img src="banner"></img>*/}
            
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props){
    //console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);
    return(
        <StyledTimeline>
            {playlistNames.map((playlistNames) => {
                const videos = props.playlists[playlistNames];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.map((videos) => {
                            return (
                                <a href={videos.url}>
                                    <img src={videos.thumb}></img>
                                    <span>
                                        {videos.title}
                                    </span>
                                </a>
                            )
                        })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}