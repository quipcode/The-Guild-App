// TODO: Activate caret active animation
import React, { Component } from 'react';
import {TweenLite, Bounce, Elastic} from 'gsap';


class CpcNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jsxData: [],
            submenu: [],
            Menu: {
                'Home': {
                    'link': '#home',
                    'icon': 'fa fa-home'
                },
                'About': {
                    'link': '#about',
                    'icon': 'fa fa-info-circle'
                },
                'Clients': {
                    'link': '#clients',
                    'icon': 'fa fa-user',
                    'menu': {
                        'Burger King': {
                            'link': '#burger_king',
                            'icon': 'fa fa-check'
                        },
                        'Southwest Airlines': {
                            'link': '#southwest_airlines',
                            'icon': 'fa fa-check'
                        },
                        'Levi Strauss': {
                            'link': '#levi_strauss',
                            'icon': 'fa fa-check'
                        }
                    }
                },
                'Services': {
                    'link': '#services',
                    'icon': 'fa fa-cogs',
                    'menu': {
                        'Print Design': {
                            'link': '#print_design',
                            'icon': 'fa fa-check'
                        },
                        'Web Design': {
                            'link': '#web_design',
                            'icon': 'fa fa-check'
                        },
                        'Mobile App Development': {
                            'link': '#mobile_app_development',
                            'icon': 'fa fa-check'
                        }
                    }
                },
                'Contact': {
                    'link': '#contact',
                    'icon': 'fa fa-phone-square'
                }
            }
        };
    }

    componentDidMount() {
        this.setState({ jsxData: this.createMenuJSX() });
    }

    menuClickEvent(i) {
        let submenu = this.state.submenu;
        let tmpmenu = submenu[i];
        let sub = tmpmenu.sub.current;
        let caret = tmpmenu.caret.current;

        if (tmpmenu.active === false) {
            tmpmenu.active = true;

            TweenLite.to(caret, 1, {
                transform: 'rotate(180deg)',
                ease: Elastic.easeOut.config(1, 0.3)
            });

            TweenLite.to(sub, 1, {
                height: sub.scrollHeight,
                visibility: 'visible',
                ease: Elastic.easeOut.config(1, 0.3)
            });
        } else {
            tmpmenu.active = false;

            TweenLite.to(caret, 1, {
                transform: 'rotate(0deg)',
                ease: Elastic.easeOut.config(1, 0.3)
            });

            TweenLite.to(sub, 0.5, {
                height: 0,
                ease: Bounce.easeOut
            }).eventCallback('onComplete', () => {
                TweenLite.to(sub, 0, {
                    visibility: 'hidden'
                })
            });
        }

        submenu[i] = tmpmenu;

        this.setState({ submenu: submenu });
    }

    createMenuJSX(menu = this.state.Menu) {
        let link = [];

        for (let i in menu) {
            let m = menu[i];
            let ic = <i className="cpc-icon cpc-hidden fa fa-caret-down"></i>;

            if (typeof m.icon !== 'undefined') {
                ic = <i className={'cpc-icon ' + m.icon}></i>;
            }

            if (typeof m.menu === 'undefined') {
                link.push(
                    <li>
                        <a href={m.link}>
                            {ic}
                            <span>{i}</span>
                            <i className="cpc-caret cpc-hidden fa fa-caret-down"></i>
                        </a>
                    </li>
                );
            } else if (typeof m.menu === 'object') {
                let tmpSubmenu = this.state.submenu;
                let tmpLength = tmpSubmenu.length;

                tmpSubmenu.push({
                    'id': m.link,
                    'active': false,
                    'caret': React.createRef(),
                    'sub': React.createRef()
                });

                link.push(
                    <li>
                        <a
                            href={m.link}
                            onClick={this.menuClickEvent.bind(this, tmpLength)}
                        >
                            {ic}
                            <span>{i}</span>
                            <i
                                className="cpc-caret fa fa-caret-down"
                                ref={tmpSubmenu[tmpLength].caret}
                            ></i>
                        </a>
                        <ul className="cpc-sub" ref={tmpSubmenu[tmpLength].sub}>
                            {this.createMenuJSX(m.menu)}
                        </ul>
                    </li>
                );

                this.setState({ submenu: tmpSubmenu });
            }
        }

        return link;
    }

    render() {
        return (
            <nav className="cpc-menu">
                <ul className="cpc-main">
                    {this.state.jsxData}
                    
                </ul>
            </nav>
        );
    }
}

// Navigation menu builder
const menu = {
    'Home': {
        'link': '#home',
        'icon': 'fas fa-home'
    },
    'About': {
        'link': '#about',
        'icon': 'fas fa-info-circle'
    },
    'Clients': {
        'link': '#clients',
        'icon': 'fas fa-user-tie',
        'menu': {
            'Burger King': {
                'link': '#burger_king',
                'icon': 'fas fa-check'
            },
            'Southwest Airlines': {
                'link': '#southwest_airlines',
                'icon': 'fas fa-check'
            },
            'Levi Strauss': {
                'link': '#levi_strauss',
                'icon': 'fas fa-check'
            }
        }
    },
    'Services': {
        'link': '#services',
        'icon': 'fas fa-cogs',
        'menu': {
            'Print Design': {
                'link': '#print_design',
                'icon': 'fas fa-check'
            },
            'Web Design': {
                'link': '#web_design',
                'icon': 'fas fa-check'
            },
            'Mobile App Development': {
                'link': '#mobile_app_development',
                'icon': 'fas fa-check'
            }
        }
    },
    'Contact': {
        'link': '#contact',
        'icon': 'fas fa-phone-square'
    }
};



export default CpcNavigation;

// ReactDOM.render(
//     <CpcNavigation menu={menu} />,
//     document.querySelector('#app')
// );
