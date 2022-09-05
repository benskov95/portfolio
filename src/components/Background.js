import "./css/Background.css";

export default function Background() {
    return (
        <div>
            <div id="svg-container">
                <svg viewBox="670 60 500 500">
                    <polygon points="850,75 958,137.5 958,262.5
                                850,325 742,262.6 742,137.5" />
                </svg>
            </div>
            <div className="test"></div>
            <img id="chevron" src="https://i.gifer.com/1ozr.gif" alt="" />
        </div>
    )
}