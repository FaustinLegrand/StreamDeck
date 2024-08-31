export default function buttonAffiche() {
    const buttons = Array.from({ length: 20 }, (_, i) => i + 1);
    const potentiometre = Array.from({ length: 5 }, (_, i) => i + 1);
    const volume = Array.from({ length: 3 }, (_, i) => i + 1);
    const colorsPot = ["bg-blue-600", "bg-white", "bg-red-900", "bg-orange-800", "bg-black"];
    const colorsVol = ["bg-slate-900", "bg-white", "bg-red-900"];
    const position = ["50", "30", "100"];
    const textColor = ["text-white", "text-black", "text-white"];
    return (
        <div className="w-full h-[100vh] flex flex-col">
            <div className="flex flex-row h-[80%] w-full items-center justify-between">
                <div className="w-[50%] h-full flex items-end justify-end ">
                    <div className="w-[95%] h-[95%] grid grid-cols-5">
                        {buttons.map((index, button) => (
                            <button key={index} className="flex flex-col items-center gap-4 w-28 h-32">
                                <div className="h-20 w-20 rounded-lg bg-slate-600 shadow-[rgba(269,68,68,0.5)_0px_0px_10px_5px] flex items-center justify-center">ICON</div>
                                <p>Button {index}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-[30%] h-full">
                    <div className="flex flex-row items-center justify-center h-full">
                        {volume.map((index, button) => (
                            <button key={index} className="flex flex-col items-center gap-8 w-28">
                                <div className="h-[520px] w-4 rounded-full bg-black flex justify-center relative">
                                    <div className={`absolute bottom-[${position[(index - 1) % position.length]}%] ${colorsVol[(index - 1) % colorsVol.length]} w-10 h-16 rounded-md -mb-6 ${textColor[(index - 1) % textColor.length]} flex items-center justify-center font-bold`}>{position[(index - 1) % position.length]}%</div>
                                </div>
                                <p>Volume {index}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="h-full w-[30%] ">
                    <div className="h-[100vh] w-full flex items-start justify-center border-l-2 border-black">
                        <p className="text-[30px]">Paramètre</p>
                    </div>
                </div>
            </div>
            <div className="h-[20%] w-[50%] flex justify-end items-center">
                <div className="w-[95%] grid grid-cols-5 ">
                    {potentiometre.map((index, button) => (
                        <button key={index} className="flex flex-col items-center gap-4 w-28 h-32">
                            <div className={`h-20 w-20 rounded-full ${colorsPot[index -1 % colorsPot.length]} shadow-[rgba(0,0,0,0.5)_0px_0px_10px_5px] flex items-center justify-center`}>ICON</div>
                            <p>Potentio {index}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}