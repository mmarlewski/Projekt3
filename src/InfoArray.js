import React from "react";
import axios from "axios";

class InfoArray extends React.Component {
    state = {
        objectType: "hero",
        methodType: "get",
        id: "1",
        index: 0,
        isList: false,
        object: {},
        objectList: [],
        newHero: { id: 0, name: "new", hp: 0, dodge: 0, speed: 0 },
        newWeapon: { id: 0, name: "new", damage: 0, crit: 0, speed: 0 },
        newArmor: { id: 0, name: "new", dodge: 0, hp: 0 },
        newCombatSkill: {
            id: 0,
            name: "new",
            rankStart: 0,
            rankEnd: 0,
            targetStart: 0,
            targetEnd: 0,
        },
        newCampingSkill: { id: 0, name: "new", cost: 0, target: "self" },
    };

    // selects

    handleObjectTypeSelectChange = (event) => {
        this.setState({ objectType: event.target.value });
    };

    handleMethodTypeSelectChange = (event) => {
        this.setState({ methodType: event.target.value });
    };

    handleIdInputChange = (event) => {
        this.setState({ id: event.target.value });
    };

    // go button

    handleGoButtonClick = (event) => {
        console.log(this.state.methodType, this.state.objectType);
        if (this.state.methodType === "get") {
            if (this.state.objectType === "hero") {
                if (this.state.id === "0") {
                    axios.get("http://localhost:8080/Projekt2-2/heroes").then(
                        (res) =>
                            this.setState({
                                isList: true,
                                objectList: res.data,
                                index: 0,
                            }),
                        () =>
                            this.setState({
                                isList: true,
                                objectList: [
                                    { a: 1, b: 2 },
                                    { a: 3, b: 4 },
                                ],
                                index: 0,
                            })
                    );
                } else {
                    axios
                        .get(
                            "http://localhost:8080/Projekt2-2/hero/" +
                                this.state.id
                        )
                        .then(
                            (res) =>
                                this.setState({
                                    isList: false,
                                    object: res.data,
                                }),
                            () =>
                                this.setState({
                                    isList: false,
                                    object: { a: 1, b: 2, c: 3 },
                                })
                        );
                }
            } else if (this.state.objectType === "weapon") {
                if (this.state.id === "0") {
                    axios.get("http://localhost:8080/Projekt2-2/weapons").then(
                        (res) =>
                            this.setState({
                                isList: true,
                                objectList: res.data,
                                index: 0,
                            }),
                        () =>
                            this.setState({
                                isList: true,
                                objectList: [
                                    { a: 1, b: 2 },
                                    { a: 3, b: 4 },
                                ],
                                index: 0,
                            })
                    );
                } else {
                    axios
                        .get(
                            "http://localhost:8080/Projekt2-2/weapon/" +
                                this.state.id
                        )
                        .then(
                            (res) =>
                                this.setState({
                                    isList: false,
                                    object: res.data,
                                }),
                            () =>
                                this.setState({
                                    isList: false,
                                    object: { a: 1, b: 2, c: 3 },
                                })
                        );
                }
            } else if (this.state.objectType === "combatSkill") {
                if (this.state.id === "0") {
                    axios
                        .get("http://localhost:8080/Projekt2-2/combatSkills")
                        .then(
                            (res) =>
                                this.setState({
                                    isList: true,
                                    objectList: res.data,
                                    index: 0,
                                }),
                            () =>
                                this.setState({
                                    isList: true,
                                    objectList: [
                                        { a: 1, b: 2 },
                                        { a: 3, b: 4 },
                                    ],
                                    index: 0,
                                })
                        );
                } else {
                    axios
                        .get(
                            "http://localhost:8080/Projekt2-2/combatSkill/" +
                                this.state.id
                        )
                        .then(
                            (res) =>
                                this.setState({
                                    isList: false,
                                    object: res.data,
                                }),
                            () =>
                                this.setState({
                                    isList: false,
                                    object: { a: 1, b: 2, c: 3 },
                                })
                        );
                }
            } else if (this.state.objectType === "campingSkill") {
                if (this.state.id === "0") {
                    axios
                        .get("http://localhost:8080/Projekt2-2/campingSkills")
                        .then(
                            (res) =>
                                this.setState({
                                    isList: true,
                                    objectList: res.data,
                                    index: 0,
                                }),
                            () =>
                                this.setState({
                                    isList: true,
                                    objectList: [
                                        { a: 1, b: 2 },
                                        { a: 3, b: 4 },
                                    ],
                                    index: 0,
                                })
                        );
                } else {
                    axios
                        .get(
                            "http://localhost:8080/Projekt2-2/campingSkill/" +
                                this.state.id
                        )
                        .then(
                            (res) =>
                                this.setState({
                                    isList: false,
                                    object: res.data,
                                }),
                            () =>
                                this.setState({
                                    isList: false,
                                    object: { a: 1, b: 2, c: 3 },
                                })
                        );
                }
            } else {
                if (this.state.id === "0") {
                    axios.get("http://localhost:8080/Projekt2-2/armors").then(
                        (res) =>
                            this.setState({
                                isList: true,
                                objectList: res.data,
                                index: 0,
                            }),
                        () =>
                            this.setState({
                                isList: true,
                                objectList: [
                                    { a: 1, b: 2 },
                                    { a: 3, b: 4 },
                                ],
                                index: 0,
                            })
                    );
                } else {
                    axios
                        .get(
                            "http://localhost:8080/Projekt2-2/armor/" +
                                this.state.id
                        )
                        .then(
                            (res) =>
                                this.setState({
                                    isList: false,
                                    object: res.data,
                                }),
                            () =>
                                this.setState({
                                    isList: false,
                                    object: { a: 1, b: 2, c: 3 },
                                })
                        );
                }
            }
        } else if (this.state.methodType === "delete") {
            if (this.state.objectType === "hero") {
                if (this.state.id === "0") {
                    axios.delete("http://localhost:8080/Projekt2-2/heroes");
                } else {
                    axios.delete(
                        "http://localhost:8080/Projekt2-2/hero/" + this.state.id
                    );
                }
            } else if (this.state.objectType === "weapon") {
                if (this.state.id === "0") {
                    axios.delete("http://localhost:8080/Projekt2-2/weapons");
                } else {
                    axios.delete(
                        "http://localhost:8080/Projekt2-2/weapon/" +
                            this.state.id
                    );
                }
            } else if (this.state.objectType === "combatSkill") {
                if (this.state.id === "0") {
                    axios.delete(
                        "http://localhost:8080/Projekt2-2/combatSkills"
                    );
                } else {
                    axios.delete(
                        "http://localhost:8080/Projekt2-2/combatSkill/" +
                            this.state.id
                    );
                }
            } else if (this.state.objectType === "campingSkill") {
                if (this.state.id === "0") {
                    axios.delete(
                        "http://localhost:8080/Projekt2-2/campingSkills"
                    );
                } else {
                    axios.delete(
                        "http://localhost:8080/Projekt2-2/campingSkill/" +
                            this.state.id
                    );
                }
            } else {
                if (this.state.objectType === "armor") {
                    if (this.state.id === "0") {
                        axios.delete("http://localhost:8080/Projekt2-2/armors");
                    } else {
                        axios.delete(
                            "http://localhost:8080/Projekt2-2/armor/" +
                                this.state.id
                        );
                    }
                }
            }
        } else if (this.state.methodType === "post") {
            if (this.state.objectType === "hero")
                axios.post(
                    "http://localhost:8080/Projekt2-2/hero",
                    this.state.newHero
                );
            else if (this.state.objectType === "weapon")
                axios.post(
                    "http://localhost:8080/Projekt2-2/weapon",
                    this.state.newWeapon
                );
            else if (this.state.objectType === "combatSkill")
                axios.post(
                    "http://localhost:8080/Projekt2-2/combatSkill",
                    this.state.newCombatSkill
                );
            else if (this.state.objectType === "campingSkill")
                axios.post(
                    "http://localhost:8080/Projekt2-2/campingSkill",
                    this.state.newCampingSkill
                );
            else
                axios.post(
                    "http://localhost:8080/Projekt2-2/armor",
                    this.state.newArmor
                );
        } else {
            if (this.state.objectType === "hero")
                axios.put(
                    "http://localhost:8080/Projekt2-2/hero",
                    this.state.newHero
                );
            else if (this.state.objectType === "weapon")
                axios.put(
                    "http://localhost:8080/Projekt2-2/weapon",
                    this.state.newWeapon
                );
            else if (this.state.objectType === "combatSkill")
                axios.put(
                    "http://localhost:8080/Projekt2-2/combatSkill",
                    this.state.newCombatSkill
                );
            else if (this.state.objectType === "campingSkill")
                axios.put(
                    "http://localhost:8080/Projekt2-2/campingSkill",
                    this.state.newCampingSkill
                );
            else
                axios.put(
                    "http://localhost:8080/Projekt2-2/armor",
                    this.state.newArmor
                );
        }
    };

    // arrows

    handleRightButtonClick = () => {
        this.setState({
            index:
                this.state.index === 0
                    ? this.state.index
                    : this.state.index - 1,
        });
    };

    handleLeftButtonClick = () => {
        this.setState({
            index:
                this.state.index === this.state.objectList.length - 1
                    ? this.state.index
                    : this.state.index + 1,
        });
    };

    // hero

    handleHeroIdInputChange = (event) => {
        this.setState({
            newHero: { ...this.state.newHero, id: event.target.value },
        });
    };

    handleHeroNameInputChange = (event) => {
        this.setState({
            newHero: { ...this.state.newHero, name: event.target.value },
        });
    };

    handleHeroHpInputChange = (event) => {
        this.setState({
            newHero: { ...this.state.newHero, hp: event.target.value },
        });
    };

    handleHeroDodgeInputChange = (event) => {
        this.setState({
            newHero: { ...this.state.newHero, dodge: event.target.value },
        });
    };

    handleHeroSpeedInputChange = (event) => {
        this.setState({
            newHero: { ...this.state.newHero, speed: event.target.value },
        });
    };

    // weapon

    handleWeaponIdInputChange = (event) => {
        this.setState({
            newWeapon: { ...this.state.newWeapon, id: event.target.value },
        });
    };

    handleWeaponNameInputChange = (event) => {
        this.setState({
            newWeapon: { ...this.state.newWeapon, name: event.target.value },
        });
    };

    handleWeaponDamageInputChange = (event) => {
        this.setState({
            newWeapon: { ...this.state.newWeapon, damage: event.target.value },
        });
    };

    handleWeaponCritInputChange = (event) => {
        this.setState({
            newWeapon: { ...this.state.newWeapon, crit: event.target.value },
        });
    };

    handleWeaponSpeedInputChange = (event) => {
        this.setState({
            newWeapon: { ...this.state.newWeapon, speed: event.target.value },
        });
    };

    // armor

    handleArmorIdChange = (event) => {
        this.setState({
            newArmor: { ...this.state.newArmor, id: event.target.value },
        });
    };

    handleArmorNameChange = (event) => {
        this.setState({
            newArmor: { ...this.state.newArmor, name: event.target.value },
        });
    };

    handleArmorDodgeChange = (event) => {
        this.setState({
            newArmor: { ...this.state.newArmor, dodge: event.target.value },
        });
    };

    handleArmorHpChange = (event) => {
        this.setState({
            newArmor: { ...this.state.newArmor, hp: event.target.value },
        });
    };

    // combat skill

    handleCombatSkillIdChange = (event) => {
        this.setState({
            newCombatSkill: {
                ...this.state.newCombatSkill,
                id: event.target.value,
            },
        });
    };

    handleCombatSkillNameChange = (event) => {
        this.setState({
            newCombatSkill: {
                ...this.state.newCombatSkill,
                name: event.target.value,
            },
        });
    };

    handleCombatSkillRankStartChange = (event) => {
        this.setState({
            newCombatSkill: {
                ...this.state.newCombatSkill,
                rankStart: event.target.value,
            },
        });
    };

    handleCombatSkillRankEndChange = (event) => {
        this.setState({
            newCombatSkill: {
                ...this.state.newCombatSkill,
                rankEnd: event.target.value,
            },
        });
    };

    handleCombatSkillTargetStartChange = (event) => {
        this.setState({
            newCombatSkill: {
                ...this.state.newCombatSkill,
                targetStart: event.target.value,
            },
        });
    };

    handleCombatSkillTargetEndChange = (event) => {
        this.setState({
            newCombatSkill: {
                ...this.state.newCombatSkill,
                targetEnd: event.target.value,
            },
        });
    };

    // camping skill

    handleCampingSkillIdChange = (event) => {
        this.setState({
            newCampingSkill: {
                ...this.state.newCampingSkill,
                id: event.target.value,
            },
        });
    };

    handleCampingSkillNameChange = (event) => {
        this.setState({
            newCampingSkill: {
                ...this.state.newCampingSkill,
                name: event.target.value,
            },
        });
    };

    handleCampingSkillCostChange = (event) => {
        this.setState({
            newCampingSkill: {
                ...this.state.newCampingSkill,
                cost: event.target.value,
            },
        });
    };

    handleCampingSkillTargetChange = (event) => {
        this.setState({
            newCampingSkill: {
                ...this.state.newCampingSkill,
                target: event.target.value,
            },
        });
    };

    // render head row

    renderHeadRow = (methodType) => {
        switch (methodType) {
            case "get":
                return (
                    <tr>
                        <th style={{ color: "green" }}>key</th>
                        <th style={{ color: "green" }}>value</th>
                    </tr>
                );
            case "delete":
                return (
                    <tr>
                        <th style={{ color: "red" }}>delete</th>
                        <th style={{ color: "red" }}>object</th>
                    </tr>
                );
            case "post":
                return (
                    <tr>
                        <th style={{ color: "orange" }}>post</th>
                        <th style={{ color: "orange" }}>object</th>
                    </tr>
                );
            case "put":
                return (
                    <tr>
                        <th style={{ color: "gold" }}>put</th>
                        <th style={{ color: "gold" }}>object</th>
                    </tr>
                );
            default:
                return <tr></tr>;
        }
    };

    // render table body

    renderTableBody = () => {
        let obj = {};

        if (this.state.isList) {
            if (this.state.objectList.length > 0) {
                obj = this.state.objectList[this.state.index];
            }
        } else {
            obj = this.state.object;
        }

        switch (this.state.methodType) {
            case "get":
                return Object.keys(obj).map((key) => (
                    <tbody>
                        <tr>
                            <th>{key}</th>
                            <th>{obj[key]}</th>
                        </tr>
                    </tbody>
                ));
            case "post":
            case "put":
                if (this.state.objectType === "hero") {
                    return (
                        <tbody>
                            <tr>
                                <th>name</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleHeroNameInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>hp</th>
                                <th>
                                    <input
                                        onChange={this.handleHeroHpInputChange}
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>dodge</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleHeroDodgeInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>speed</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleHeroSpeedInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                        </tbody>
                    );
                } else if (this.state.objectType === "weapon") {
                    return (
                        <tbody>
                            <tr>
                                <th>name</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleWeaponNameInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>damage</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleWeaponDamageInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>crit</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleWeaponCritInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>speed</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleWeaponSpeedInputChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                        </tbody>
                    );
                } else if (this.state.objectType === "armor") {
                    return (
                        <tbody>
                            <tr>
                                <th>name</th>
                                <th>
                                    <input
                                        onChange={this.handleArmorNameChange}
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>dodge</th>
                                <th>
                                    <input
                                        onChange={this.handleArmorDodgeChange}
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>hp</th>
                                <th>
                                    <input
                                        onChange={this.handleArmorHpChange}
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                        </tbody>
                    );
                } else if (this.state.objectType === "combatSkill") {
                    return (
                        <tbody>
                            <tr>
                                <th>name</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleCombatSkillNameChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>rank start</th>
                                <th>
                                    <input
                                        onChange={
                                            this
                                                .handleCombatSkillRankStartChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>rank end</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleCombatSkillRankEndChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>target start</th>
                                <th>
                                    <input
                                        onChange={
                                            this
                                                .handleCombatSkillTargetStartChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>target end</th>
                                <th>
                                    <input
                                        onChange={
                                            this
                                                .handleCombatSkillTargetEndChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                        </tbody>
                    );
                } else if (this.state.objectType === "campingSkill") {
                    return (
                        <tbody>
                            <tr>
                                <th>name</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleCampingSkillNameChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>cost</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleCampingSkillCostChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>target</th>
                                <th>
                                    <input
                                        onChange={
                                            this.handleCampingSkillTargetChange
                                        }
                                        type="text"
                                        style={{ width: "50px" }}
                                    />
                                </th>
                            </tr>
                        </tbody>
                    );
                } else {
                    return (
                        <tbody>
                            <tr></tr>
                        </tbody>
                    );
                }
            default:
                return (
                    <tbody>
                        <tr></tr>
                    </tbody>
                );
        }
    };

    // render

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <table>
                    <thead>
                        <tr>
                            <th style={{ color: "blue" }}>object</th>
                            <th style={{ color: "blue" }}>method</th>
                        </tr>
                        <tr>
                            <th>
                                <select
                                    onChange={this.handleObjectTypeSelectChange}
                                    style={{ width: "100px" }}
                                >
                                    <option value="hero">hero</option>
                                    <option value="weapon">weapon</option>
                                    <option value="armor">armor</option>
                                    <option value="combatSkill">
                                        combat skill
                                    </option>
                                    <option value="campingSkill">
                                        camping skill
                                    </option>
                                </select>
                            </th>
                            <th>
                                <select
                                    onChange={this.handleMethodTypeSelectChange}
                                    style={{ width: "100px" }}
                                >
                                    <option value="get">get</option>
                                    <option value="delete">delete</option>
                                    <option value="post">post</option>
                                    <option value="put">put</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th style={{ color: "blue" }}>index</th>
                            <th style={{ color: "blue" }}>go</th>
                        </tr>
                        <tr>
                            <th>
                                <input
                                    onChange={this.handleIdInputChange}
                                    type="text"
                                    style={{ width: "50px" }}
                                />
                            </th>
                            <th>
                                <button
                                    onClick={this.handleGoButtonClick}
                                    style={{ width: "50px" }}
                                >
                                    go
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th style={{ color: "blue" }}>prev</th>
                            <th style={{ color: "blue" }}>next</th>
                        </tr>
                        <tr>
                            <th>
                                <button
                                    onClick={this.handleRightButtonClick}
                                    style={{ width: "50px" }}
                                >
                                    {"<-"}
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={this.handleLeftButtonClick}
                                    style={{ width: "50px" }}
                                >
                                    {"->"}
                                </button>
                            </th>
                        </tr>
                        {this.renderHeadRow(this.state.methodType)}
                    </thead>
                    {this.renderTableBody()}
                </table>
            </div>
        );
    }
}

export default InfoArray;
