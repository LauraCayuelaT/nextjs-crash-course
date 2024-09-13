import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

// To fetch data we use de fetch api

async function fetchRepos() {
  //We are going to let Next how often our data will be changing. I we're working with data that is constantly changing we might use this. 
  const response = await fetch("https://api.github.com/users/lauracayuelat/repos", {
    next: {
      revalidate: 60
    }
  });

  await new Promise((resolve)=>setTimeout(resolve,1000)) //Wait one second to see the loading component
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        { repos.map((repo)=>(
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details">
              <span>
                <FaStar/> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch/>{repo.forks_count}
              </span>
              <span>
                <FaEye/>{repo.watchers_count}
              </span>
            </div>
            </Link>
          </li>
        ))}
      </ul>

      
    </div>
  )
}

export default ReposPage;
