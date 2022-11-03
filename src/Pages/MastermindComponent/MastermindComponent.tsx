import ColorComponent from "../../Components/ColorComponent/ColorComponent"

const MastermindComponent: React.FC = () => {

    return (
        <main>
            <h3 className="w-screen text-center mb-6">Hello world</h3>
            <legend className="w-screen text-center mb-3">
                Voici la liste des couleurs disponibles :
            </legend>
            <div className="w-screen flex justify-center items-center">
                <div id="color-list" className="w-4/12" >
                    <ColorComponent id={0} color={"blue"} image_path={"/images/blue_pin.svg"} />
                    <ColorComponent id={1} color={"green"} image_path={"/images/green_pin.svg"} />
                    <ColorComponent id={2} color={"red"} image_path={"/images/red_pin.svg"} />
                    <ColorComponent id={3} color={"yellow"} image_path={"/images/yellow_pin.svg"} />
                </div>
            </div>
        </main>
    )
}

export default MastermindComponent