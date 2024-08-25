import React from "react";

function Stats(){
    return(
        <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full max-w-full px-3 mb-6  mx-auto bg-white">
                <div className="flex flex-wrap mt-5 mx-5 removable">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable" draggable="true">
                        <div className="flex flex-col items-start justify-between flex-auto py-8 px-9 mx-auto">
                            <div className="m-0">
            
                            </div>
                            <div className="flex flex-col my-7">
                                <span className="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold">3</span>
                                <div className="m-0">
                                    <span className="font-medium text-secondary-dark text-lg/normal">Ordenes Ptes Surtir</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable" draggable="true">
                        <div className="flex flex-col items-start justify-between flex-auto py-8 px-9 mx-auto">
                            <div className="m-0">
                                
                            </div>
                            <div className="flex flex-col my-7">
                                <span className="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold">2</span>
                                <div className="m-0">
                                    <span className="font-medium text-secondary-dark text-lg/normal">Ordenes Ptes Recolectar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable" draggable="true">
                        <div className="flex flex-col items-start justify-between flex-auto py-8 px-9 mx-auto">
                            <div className="m-0">
                        
                            </div>
                            <div className="flex flex-col my-7">
                                <span className="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold">5</span>
                                <div className="m-0">
                                    <span className="font-medium text-secondary-dark text-lg/normal">Ordenes Cerradas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable" draggable="true">
                        <div className="flex flex-col items-start justify-between flex-auto py-8 px-9 mx-auto">
                            <div className="m-0">
            
                            </div>
                            <div className="flex flex-col my-7">
                                <span className="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold">77k</span>
                                <div className="m-0">
                                    <span className="font-medium text-secondary-dark text-lg/normal">Venta Acumulada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;