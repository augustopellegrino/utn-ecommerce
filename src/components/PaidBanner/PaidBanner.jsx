import './PaidBanner.css'

import { IoCardOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { LuPackageCheck } from "react-icons/lu";
import { TbPackageExport } from "react-icons/tb";

const PaidBanner = () => {
    return (
        <div id='paidBanner'>
            <div>
                <span><IoCardOutline/></span>
                <p>Todos los medios de pago</p>
            </div>
            <div>
                <span><TbPackageExport /></span>
                <p>Envios a todo el pais</p>
            </div>
            <div>
                <span><LuPackageCheck /></span>
                <p>Envios gratis desde $20</p>
            </div>
            <div>
                <span><GoShieldCheck /></span>
                <p>Compra protegida</p>
            </div>
        </div>
    )
}

export default PaidBanner