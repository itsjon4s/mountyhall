import styles from "../styles/EntradaNumerica.module.css"

interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void;
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <div className={styles.btn} onClick={dec}>-</div>
                <div className={styles.btn} onClick={inc}>+</div>
            </div>
        </div>
    )
}