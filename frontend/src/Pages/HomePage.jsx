import { useNavigate } from "react-router-dom"

export function HomePage(){
const nav = useNavigate()

function handleSignIn(){
    nav("/signin")
}
function handleSignUp(){
    nav("/signup")
}
function handleDash(){
    nav("/dashboard")
}

    return <div>
        HomePage
        <div>
            <button onClick={handleSignUp}>SignUp</button>
            <button onClick={handleSignIn}>SignIn</button>
            <button onClick={handleDash}>Dashboard</button>
        </div>
    </div>
}