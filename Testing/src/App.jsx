import KS from "./KS";

const App = () => {
    // const headingStyle = {
    //     color : "skyblue",
    //     fontFamily : "sans-serif"
    // }
    return (
        <div className="border border-black p-10">
            {/* <KS/> */}
            <h1 className="text-3xl font-bold text-center mb-4">Hello React</h1>
            <p className="bole text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni sunt fugit ratione modi, exercitationem delectus facere veniam nulla quos itaque id odit quidem, necessitatibus eum distinctio deserunt quod laboriosam.</p>
            <button className="border border-gray-600 p-4 bg-cyan-400">Click Me</button>
        </div>
    )
}

export default App;