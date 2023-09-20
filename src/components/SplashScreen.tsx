

const splashScreen:React.FC=()=>{
    return(
        <div className="hero min-h-screen" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Create your Wallet</button><br/>
                    <button className="btn btn-primary mt-2">Import Wallet</button>
                </div>
            </div>
        </div>
    );
}

export default splashScreen;