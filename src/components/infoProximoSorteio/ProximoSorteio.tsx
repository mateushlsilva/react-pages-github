import styled from "styled-components";

function ProximoSorteio({ informacoes, data }: any) {
    return (
        <DataSld>
            <h4>
                {informacoes}{data}
            </h4>
        </DataSld>
    );
}
export default ProximoSorteio;

const DataSld = styled.div`
    margin-left: 17vh;
    max-width: 250px;
    color: #4c556c;
`