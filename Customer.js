/**
 * 客を取り扱うクラス
 */
class Customer {
    /**
     * コンストラクタ
     * @param {number} delta - (客の)処理時間の平均値
     * @param {number} sigma - 処理時間の標準偏差
     */
    constructor(delta, sigma) {
        /**
         * 処理時間の残り
         * @type {number}
         */
        this._remain = Customer.gauss(delta, sigma); // 本当は平均時間とσから処理時間を計算する
        this.sigma = sigma;
        this.delta = delta;
    }

    /**
     * 内部的に時間を進める
     * @param {number} time - 経過させる単位時間
     */
    process(time) {
        this._remain -= time;
        return this._remain;
    }

    /**
     * 客の処理時間を設定する
     * @param delta (客の)処理時間の平均値
     * @param sigma 処理時間の標準偏差
     * @returns {number} - 処理時間
     */
    static gauss(delta, sigma) {
        let del = 0.0;
        for( let p=0; p<12; p++ ) {
            del += Math.random();
        }
        return delta + sigma * (del - 6.0);
    }
}