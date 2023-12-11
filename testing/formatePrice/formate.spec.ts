
import { roundPrice } from './formate';



describe('roundPrice', () => {
    it('should round to two decimal places and add SEK if no format is provided', () => {
        expect(roundPrice(232.10542)).toEqual('232.11 SEK');
        expect(roundPrice(14)).toEqual('14.00 SEK');
        expect(roundPrice(1024.2048)).toEqual('1024.21 SEK');
    });

    it('should use the provided format', () => {
        expect(roundPrice(232.10542, '%PRICE% SEK')).toEqual('232.11 SEK');
        expect(roundPrice(14, '$%PRICE%')).toEqual('$ 14.00');
        expect(roundPrice(1024.2048, 'USD %PRICE%')).toEqual('USD 1024.21');
    });

    it('should handle different currency positions', () => {
        expect(roundPrice(232.10542, 'SEK %PRICE%')).toEqual('SEK 232.11');
        expect(roundPrice(14, '%PRICE% $')).toEqual('14.00 $');
        expect(roundPrice(1024.2048, '%PRICE% USD')).toEqual('1024.21 USD');
    });
});
