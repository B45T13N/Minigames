import BoardComponent from "../../Components/BoardComponent/BoardComponent"
import ColorComponent from "../../Components/ColorComponent/ColorComponent"

const MastermindComponent: React.FC = () => {

    return (
        <main className="h-4/6">
            <h3 className="w-screen text-center mb-6">Welcome to the Mastermind game</h3>
            <p>Rules :
                The bot can pick 4 different colors, and place it to 4 differents places. You have to place your pins and check with the bots
            </p>
            <legend className="w-screen text-center mb-3">
                Color available :
            </legend>
            <div className="w-screen flex justify-center items-center">
                <div id="color-list" className="flex w-full" >
                    <ColorComponent id={0} color={"blue"} image_path={"/images/blue_pin.svg"} />
                    <ColorComponent id={1} color={"green"} image_path={"/images/green_pin.svg"} />
                    <ColorComponent id={2} color={"red"} image_path={"/images/red_pin.svg"} />
                    <ColorComponent id={3} color={"yellow"} image_path={"/images/yellow_pin.svg"} />
                </div>
            </div>
            <BoardComponent />
        </main >
    )
}

export default MastermindComponent