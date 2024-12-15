import Link from "next/link"
import Image from 'next/image'

import Logo from '../../../public/assert/logo.png';


const LogoComponent = () => {
    return (
        <div>
            <Link href='/'>
                <Image
                    src={Logo}
                    width={100}
                    height={100}
                    alt="SSK Samaj Kanchipuram"
                />
            </Link>
        </div>
    )
}

export default LogoComponent;