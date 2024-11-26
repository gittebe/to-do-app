import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { ToDoCard } from "../components/ToDoCard";

const HomeStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
background-color: #5476de;
`
export const Home = () => {
  return (

    <HomeStyle>
      <Header />
      <ToDoCard />
      <ProjectCard />
    </HomeStyle>
  )
}