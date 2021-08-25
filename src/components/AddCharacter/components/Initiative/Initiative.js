import { LineOutlined } from '@ant-design/icons';
import { Button, Row, Col, Typography } from 'antd';

import { useStateValueInitiatives as useStateValue } from '../../../../state-manager/context';
import {
    NEGATIVE_INPUT_INITIATIVE,
    WRITE_INPUT_INITIATIVE
} from '../../../../state-manager/initiatives/actions';

const { Title } = Typography;

const buttons = [
    { value: "1", type: WRITE_INPUT_INITIATIVE },
    { value: "2", type: WRITE_INPUT_INITIATIVE },
    { value: "3", type: WRITE_INPUT_INITIATIVE },
    { value: "4", type: WRITE_INPUT_INITIATIVE },
    { value: "5", type: WRITE_INPUT_INITIATIVE },
    { value: "6", type: WRITE_INPUT_INITIATIVE },
    { value: "7", type: WRITE_INPUT_INITIATIVE },
    { value: "8", type: WRITE_INPUT_INITIATIVE },
    { value: "9", type: WRITE_INPUT_INITIATIVE },
    { Icon: LineOutlined, type: NEGATIVE_INPUT_INITIATIVE },
    { value: "0", type: WRITE_INPUT_INITIATIVE },
];


function Keyboard() {
    const [, dispatch] = useStateValue();
    return (
        <>
            {buttons.map(({ type, value, Icon, danger }) => {
                return (
                    <Col span={8} key={type + value}>
                        <Button
                            danger={danger}
                            size="large"
                            title={value ?? undefined}
                            style={{ minWidth: '70px', height: '100%' }}
                            type="primary" onClick={() => dispatch({ type, value })} >
                            {!!value ? value : <Icon />}
                        </Button>
                    </Col>
                );
            })}
        </>
    )
}

export default function Initiative() {
    const [{ inputInitiative }] = useStateValue();

    return (
        <>
            <Row gutter={[16, 16]} justify="center">
                <Col span={8} >
                    <Title style={{ margin: 10 }} level={3}>Initiative: {inputInitiative}</Title>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Keyboard />
            </Row>
        </>
    );
}
