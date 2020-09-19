import React from 'react';

//Styled
import { Box, TitleSpan, ButtonPrime} from '../../styled/main';

function asideBanner() {
    return (
        <Box marginTop={"20"} marginBottom={"20"}>
            <TitleSpan>Versão
                <span> PRO</span>
            </TitleSpan>
            <p>Escolha o plano ideal para sua empresa</p>
            <ButtonPrime colorButton={"#1C1CDE"} backgroundButton={"#E3E3FF"} marginTop={50}>
                Update
            </ButtonPrime>
        </Box>
    )
}

export default asideBanner;