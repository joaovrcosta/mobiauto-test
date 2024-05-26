import Image from 'next/image'
import logoMobiAuth from '@/assets/logo-mobiauto.png'
import shortLogoMobiAuto from '@/assets/short-logo-mobiauto.png'
import * as S from './styles'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoLocationSharp } from 'react-icons/io5'
import { TiHome } from 'react-icons/ti'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../molecules/sheet'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <div>
          <Link href="/">
            <Image src={logoMobiAuth} alt="Logo" width={150} height={20} />
          </Link>
        </div>
        <S.NavContainer>
          <ul>
            <li>
              <S.NavButton variant="ghost">
                <TiHome size={24} />
                <Link href="/">Inicio</Link>
              </S.NavButton>
            </li>
            <li>
              <S.NavButton variant="ghost">
                <IoLocationSharp size={22} className="mr-1" color="#5d01bc" />
                <Link href="/">SP</Link>
              </S.NavButton>
            </li>
            <li>
              <S.NavButton variant="ghost">
                <CgProfile size={24} className="mr-1" color="#5d01bc" />
                <Link href="#">Entrar</Link>
              </S.NavButton>
            </li>
            <li>
              <S.CheckButton>
                <IoSearchOutline size={24} className="mr-2" />
                <Link href="/tabela-fipe">Consultar tabela Fipe</Link>
              </S.CheckButton>
            </li>
          </ul>
        </S.NavContainer>
        <S.MobileHeading>
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu size={24} />
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={shortLogoMobiAuto}
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </SheetTitle>
                <S.NavButton variant="ghost">
                  <IoLocationSharp size={24} />
                  São Paulo
                </S.NavButton>
                <S.CheckButton>
                  <IoSearchOutline size={24} className="mr-2" />
                  <Link href="/tabela-fipe">Consultar tabela Fipe</Link>
                </S.CheckButton>
                <S.NavButton variant="outline">
                  <TiHome size={24} />
                  <Link href="/">Inicio</Link>
                </S.NavButton>
                <S.NavButton variant="outline">
                  <CgProfile size={24} color="#5d01bc" />
                  Entrar
                </S.NavButton>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </S.MobileHeading>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
