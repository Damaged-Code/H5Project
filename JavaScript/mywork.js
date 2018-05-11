const body = {
                baseId: props.match.params.baseId,
                username: userInfo.username,
                password: userInfo.password,
            }
            if (props.location.pathname === '/loginRes') {
                // this.loginError(nextProps)
                let result = await login(body)
                if (result.success) {
                    const baseId = result.data && result.data.baseId
                    //console.log(baseId, result)
                    // nextProps.location.pathname += `/${baseId}/published`
                    /*   this.setState({
                        toNextLocation: nextProps.location,
                    }) */
                } else {
                    // this.loginError(nextProps)
                }
            }