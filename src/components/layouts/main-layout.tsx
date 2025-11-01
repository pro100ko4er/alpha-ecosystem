import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { switchTheme } from "../../core/store/reducers/theme-reducer";

export interface MainLayoutProps {
    children: ReactNode
}


export default function MainLayout(props: MainLayoutProps) {
    const {children} = props
    const theme = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    const onSwitchTheme = () => {
        if(theme.theme === 'light') dispatch(switchTheme({theme: 'dark'}))
        else dispatch(switchTheme({theme: 'light'}))
    }
    return (
    <Box>
        <Flex align={'center'} justify={'end'}>
            <Button onClick={onSwitchTheme}>
               {theme.theme === 'dark' ? <SunIcon /> : <MoonIcon />}  
            </Button>
        </Flex>
        {children}
    </Box>
    )
}