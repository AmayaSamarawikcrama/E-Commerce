import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', simple: true },
    { 
      name: 'Collections', 
      items: ['Haute Couture', 'Bespoke Tailoring', 'Limited Editions', 'Archives'] 
    },
    {
      name: 'About Us', simple: true 
    },
    { name: 'Contact', simple: true }
  ];

  return (
    <>
      {/* Elite Header Strip */}
      <div className="fixed-top w-100" style={{
        background: 'linear-gradient(90deg, #8B0000 0%, #DC143C 25%, #FF69B4 50%, #DC143C 75%, #8B0000 100%)',
        height: '3px',
        zIndex: 1002,
        animation: 'luxuryShine 3s infinite'
      }}></div>

      {/* Main Navigation */}
      <nav className="fixed-top w-100" style={{
        top: '3px',
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.95)' 
          : 'linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(25, 25, 25, 0.95) 100%)',
        backdropFilter: 'blur(30px)',
        borderBottom: '1px solid rgba(220, 20, 60, 0.3)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1001,
        boxShadow: isScrolled 
          ? '0 20px 60px rgba(139, 0, 0, 0.4)' 
          : '0 10px 40px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Luxury Accent Lines */}
        <div className="position-absolute w-100" style={{
          top: '0',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.8), transparent)'
        }}></div>
        <div className="position-absolute w-100" style={{
          bottom: '0',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(220, 20, 60, 0.6), transparent)'
        }}></div>

        <div className="container-fluid px-5 py-3">
          <div className="d-flex align-items-center justify-content-between">
            
            {/* Premium Brand Identity */}
            <div className="d-flex align-items-center">
              <div className="position-relative me-4">
                {/* Diamond Shape Logo */}
                <div className="position-relative" style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF4500)',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  animation: 'diamondRotate 4s infinite linear'
                }}>
                  <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold" style={{
                    fontSize: '12px',
                    textShadow: '0 0 10px rgba(0,0,0,0.8)'
                  }}>
                    D
                  </div>
                </div>
              </div>
              
              <div>
                <h1 className="mb-0 fw-bold" style={{
                  fontSize: '2.8rem',
                  background: 'linear-gradient(45deg, #FFD700 0%, #FF6B6B 30%, #4ECDC4 60%, #45B7D1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'serif',
                  letterSpacing: '0.15em',
                  textShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
                  position: 'relative'
                }}>
                  DAWN
                </h1>
                <div className="text-warning" style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  fontWeight: '300',
                  marginTop: '-5px'
                }}>
                  
                </div>
              </div>
            </div>

            {/* Sophisticated Search Experience */}
            <div className="d-none d-xl-flex align-items-center flex-grow-1 justify-content-center mx-5">
              <div className="position-relative">
                <div 
                  className="d-flex align-items-center"
                  style={{
                    background: searchExpanded 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1))'
                      : 'rgba(255, 255, 255, 0.08)',
                    border: searchExpanded 
                      ? '2px solid rgba(255, 215, 0, 0.6)' 
                      : '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '30px',
                    padding: '12px 25px',
                    minWidth: searchExpanded ? '500px' : '350px',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: searchExpanded 
                      ? '0 15px 50px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)' 
                      : '0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    cursor: 'text'
                  }}
                  onClick={() => setSearchExpanded(true)}
                >
                  <svg width="20" height="20" className="text-warning me-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Discover extraordinary pieces..."
                    className="flex-grow-1 border-0 bg-transparent text-white"
                    style={{
                      outline: 'none',
                      fontSize: '1rem',
                      fontWeight: '300',
                      letterSpacing: '0.05em'
                    }}
                    onFocus={() => setSearchExpanded(true)}
                    onBlur={() => setTimeout(() => setSearchExpanded(false), 200)}
                  />
                  {searchExpanded && (
                    <div className="text-warning opacity-75" style={{ fontSize: '0.75rem' }}>
                      Press Enter
                    </div>
                  )}
                </div>

                {/* Search Suggestions Dropdown */}
                {searchExpanded && (
                  <div className="position-absolute w-100 mt-2" style={{
                    background: 'linear-gradient(135deg, rgba(25, 25, 25, 0.95), rgba(139, 0, 0, 0.9))',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                    zIndex: 1000
                  }}>
                    <div className="p-4">
                      <div className="text-warning text-uppercase mb-3" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                        Trending Searches
                      </div>
                      {['Diamond Necklaces', 'Swiss Timepieces', 'Vintage Handbags', 'Custom Jewelry'].map((item, idx) => (
                        <div key={idx} className="py-2 px-3 rounded mb-1 text-white" style={{
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 215, 0, 0.1)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Elite Navigation Menu */}
            <div className="d-none d-lg-flex align-items-center">
              {navItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="position-relative mx-2"
                  onMouseEnter={() => !item.simple && setActiveDropdown(idx)}
                  onMouseLeave={() => !item.simple && setActiveDropdown(null)}
                >
                  <a
                    href="#"
                    className="nav-link text-decoration-none px-3 py-2 position-relative"
                    style={{
                      color: activeDropdown === idx ? '#FFD700' : '#FFF',
                      fontSize: '0.9rem',
                      fontWeight: '400',
                      letterSpacing: '0.05em',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    {item.name}
                    {!item.simple && (
                      <div className="position-absolute bottom-0 start-0 w-100" style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, #FFD700, #FF6B6B)',
                        transform: activeDropdown === idx ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.4s ease',
                        transformOrigin: 'left'
                      }}></div>
                    )}
                  </a>

                  {/* Luxury Dropdown */}
                  {!item.simple && activeDropdown === idx && (
                    <div className="position-absolute top-100 start-0 mt-2" style={{
                      minWidth: '250px',
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(139, 0, 0, 0.9))',
                      backdropFilter: 'blur(30px)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5)',
                      zIndex: 1000,
                      animation: 'dropdownSlide 0.3s ease'
                    }}>
                      <div className="p-4">
                        {item.items.map((subItem, subIdx) => (
                          <a
                            key={subIdx}
                            href="#"
                            className="d-block text-decoration-none py-3 px-2 rounded mb-1"
                            style={{
                              color: '#FFF',
                              fontSize: '0.85rem',
                              transition: 'all 0.3s ease',
                              borderLeft: '3px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                              e.target.style.borderLeftColor = '#FFD700';
                              e.target.style.paddingLeft = '15px';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'transparent';
                              e.target.style.borderLeftColor = 'transparent';
                              e.target.style.paddingLeft = '8px';
                            }}
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Premium Action Icons */}
            <div className="d-flex align-items-center ms-4">
              
              {/* Wishlist Heart */}
              <div className="position-relative me-3">
                <div className="p-2 rounded-circle" style={{
                  background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(220, 20, 60, 0.2))',
                  border: '1px solid rgba(255, 105, 180, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 105, 180, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <svg width="20" height="20" fill="currentColor" className="text-light" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </div>
              </div>

              {/* Elite Shopping Bag */}
              <div className="position-relative me-4">
                <div className="p-2 rounded-circle" style={{
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <svg width="20" height="20" fill="currentColor" className="text-light" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                  </svg>
                </div>
                {/* Premium Badge */}
                <div className="position-absolute top-0 start-100 translate-middle" style={{
                  background: 'linear-gradient(45deg, #DC143C, #FF69B4)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '0.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  border: '2px solid #000'
                }}>
                  2
                </div>
              </div>

              {/* VIP Profile */}
              <div className="position-relative">
                <div className="rounded-circle overflow-hidden" style={{
                  width: '45px',
                  height: '45px',
                  border: '2px solid rgba(255, 215, 0, 0.6)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #FFD700, #FF6B6B)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderWidth = '3px';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderWidth = '2px';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white fw-bold" style={{
                    fontSize: '1.2rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    V
                  </div>
                </div>
                {/* VIP Crown */}
                <div className="position-absolute" style={{
                  top: '-8px',
                  right: '-8px',
                  color: '#FFD700',
                  fontSize: '16px',
                }}>
                  
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="btn d-lg-none ms-3"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(220, 20, 60, 0.2))',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '10px',
                  padding: '10px'
                }}
              >
                <div style={{ width: '20px', height: '15px' }}>
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      style={{
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#FFD700',
                        margin: '3px 0',
                        transition: 'all 0.3s ease',
                        transform: mobileOpen 
                          ? (i === 1 ? 'scaleX(0)' : i === 0 ? 'rotate(45deg) translateY(8px)' : 'rotate(-45deg) translateY(-8px)')
                          : 'none'
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Luxury Version */}
        {mobileOpen && (
          <div className="d-lg-none" style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(139, 0, 0, 0.95))',
            backdropFilter: 'blur(30px)',
            borderTop: '1px solid rgba(255, 215, 0, 0.2)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)',
            padding: '20px 0'
          }}>
            <div className="container">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="d-flex align-items-center" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '30px',
                  padding: '10px 20px'
                }}>
                  <svg width="18" height="18" className="text-warning me-2" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow-1 border-0 bg-transparent text-white"
                    style={{ outline: 'none' }}
                  />
                </div>
              </div>

              {/* Mobile Nav Items */}
              {navItems.map((item, idx) => (
                <div key={idx} className="mb-2">
                  <div 
                    className="d-flex justify-content-between align-items-center py-3 px-3"
                    style={{
                      borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                      cursor: 'pointer'
                    }}
                    onClick={() => !item.simple && setActiveDropdown(activeDropdown === idx ? null : idx)}
                  >
                    <span className="text-white" style={{
                      fontSize: '1.1rem',
                      fontWeight: '300',
                      letterSpacing: '0.05em'
                    }}>
                      {item.name}
                    </span>
                    {!item.simple && (
                      <svg 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="text-warning" 
                        viewBox="0 0 16 16"
                        style={{
                          transform: activeDropdown === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                      </svg>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {!item.simple && activeDropdown === idx && (
                    <div className="ps-4 py-2" style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderLeft: '2px solid rgba(255, 215, 0, 0.5)'
                    }}>
                      {item.items.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href="#"
                          className="d-block text-decoration-none py-2 px-3 text-white"
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: '300',
                            opacity: '0.9'
                          }}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Action Icons */}
              <div className="d-flex justify-content-around mt-4 pt-3" style={{
                borderTop: '1px solid rgba(255, 215, 0, 0.2)'
              }}>
                <div className="text-center">
                  <div className="p-3 rounded-circle d-inline-block" style={{
                    background: 'rgba(255, 215, 0, 0.1)',
                    border: '1px solid rgba(255, 215, 0, 0.3)'
                  }}>
                    <svg width="20" height="20" fill="currentColor" className="text-warning" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                  </div>
                  <div className="text-warning mt-2" style={{ fontSize: '0.7rem' }}>WISHLIST</div>
                </div>
                
                <div className="text-center position-relative">
                  <div className="p-3 rounded-circle d-inline-block" style={{
                    background: 'rgba(255, 215, 0, 0.1)',
                    border: '1px solid rgba(255, 215, 0, 0.3)'
                  }}>
                    <svg width="20" height="20" fill="currentColor" className="text-warning" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                  </div>
                  <div className="position-absolute top-0 start-100 translate-middle" style={{
                    background: '#DC143C',
                    color: 'white',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    fontSize: '0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    2
                  </div>
                  <div className="text-warning mt-2" style={{ fontSize: '0.7rem' }}>BAG</div>
                </div>
                
                <div className="text-center">
                  <div className="p-3 rounded-circle d-inline-block" style={{
                    background: 'rgba(255, 215, 0, 0.1)',
                    border: '1px solid rgba(255, 215, 0, 0.3)'
                  }}>
                    <svg width="20" height="20" fill="currentColor" className="text-warning" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                  </div>
                  <div className="text-warning mt-2" style={{ fontSize: '0.7rem' }}>ACCOUNT</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Premium Styles */}
      <style jsx>{`
        @keyframes luxuryShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes diamondRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes dropdownSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes crownFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        body {
          padding-top: 85px;
        }

        ::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
      `}</style>
    </>
  );
};

export default Nav;
