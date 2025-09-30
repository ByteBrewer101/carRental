import { useTestHook } from "./Hooks/TestHook"

export function TestPage(){
    const myURL = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,racist&type=twopart";
    const {loading, error, data, handleApiCall} = useTestHook()

    return (
      <div>
        {loading ? (
          <h1>loading....</h1>
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          <div>
            <h1>{data?.setup}</h1>
            <h1>{data?.delivery}</h1>
          </div>
        )}
        <button onClick={() => handleApiCall(myURL)}>Call API</button>
      </div>
    );
}