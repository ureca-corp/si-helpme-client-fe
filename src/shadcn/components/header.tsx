import { useState } from "react"
import { Button } from "@/shadcn/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">살</span>
            </div>
            <span className="text-xl font-bold text-gray-800">살려줘닷컴</span>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              상담신청
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              오시는길
            </button>
          </nav>

          {/* CTA 버튼들 */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:02-1234-5678")}
              className="hover:bg-blue-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              바로전화
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            >
              상담예약
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                상담신청
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                오시는길
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("tel:02-1234-5678")}
                  className="justify-start"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  바로전화
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-500 to-green-500"
                >
                  상담예약
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
