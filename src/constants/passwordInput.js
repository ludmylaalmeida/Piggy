import React from "react"
import { makeStyles, TextField, SvgIcon, InputAdornment} from "@material-ui/core"
import { ReactComponent as lockIcon } from "../assets/icons/lock.svg"

function LockIcon(props) {
    return (
        <SvgIcon><path fill-rule="evenodd" clip-rule="evenodd" d="M5.04863 10.6658V11.2467C5.04863 11.5176 5.26762 11.7363 5.53819 11.7363C5.80842 11.7363 6.02774 11.5176 6.02774 11.2467V10.6625C6.32768 10.4896 6.53264 10.1697 6.53264 9.80091C6.53264 9.25261 6.08649 8.80548 5.53819 8.80548C4.98956 8.80548 4.54341 9.25261 4.54341 9.80091C4.54341 10.1632 4.73923 10.4896 5.04863 10.6658ZM10.0871 12.7905C10.0871 12.908 10.0597 13.9556 9.10868 13.9948C7.68929 14.0503 2.04667 14.0013 1.9765 13.998C1.88936 13.998 1.125 13.9556 0.979112 12.5881V6.9158H10.0871V12.7905ZM5.5186 0.979112C8.26828 0.979112 8.42591 3.26044 8.43473 3.50522V5.93668H2.60281L2.60248 3.63903C2.60542 3.52807 2.70007 0.979112 5.5186 0.979112ZM10.5767 5.93668H9.41384L9.41351 3.49217C9.38283 2.2846 8.52905 0 5.5186 0C2.50783 0 1.65437 2.36292 1.62369 3.62598V5.93668H0.489556C0.219321 5.93668 0 6.15535 0 6.42624V12.6142C0 12.6305 0.000979112 12.6469 0.00261097 12.6632C0.19158 14.5463 1.39752 15.0131 1.98042 14.9772C2.12892 14.9804 4.40503 15 6.41351 15C7.56201 15 8.62337 14.9935 9.1485 14.9739C10.6651 14.9119 11.0663 13.5183 11.0663 12.7905V6.42624C11.0663 6.15535 10.8469 5.93668 10.5767 5.93668Z" fill="#222222"/></SvgIcon>
    )
}

export default function PasswordInput() {
    return (
        <TextField
          required
          margin="normal"
          id="standard-password-input"
          placeholder="Password"
          type="password"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
    )
}