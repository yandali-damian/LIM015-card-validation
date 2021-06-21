// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
    it('debería ser un objeto', () => {
        expect(typeof validator).toBe('object');
    });

    describe('validator.isValid', () => {
        it('debería ser una función', () => {
            expect(typeof validator.isValid).toBe('function');
        });

        it('debería retornar true para "4083952015263"', () => {
            expect(validator.isValid("4083952015263")).toBe(true); //creando una prueba unitaria
        });

        it('debería retornar true para "79927398713"', () => {
            expect(validator.isValid("79927398713")).toBe(true); // escribe aquí tu test
        });

        it('debería retornar false para "1234567890"', () => {
            expect(validator.isValid("1234567890")).toBe(false); // escribe aquí tu test
        });
    });

    describe('validator.maskify', () => {
        it('debería ser una función', () => {
            expect(typeof validator.maskify).toBe('function');
        });

        it('Debería retornar "############5616" para "4556364607935616"', () => {
            expect(validator.maskify("4556364607935616")).toBe("############5616"); // escribe aquí tu test
        });

        it('Debería retornar "1" para "1"', () => {
            expect(validator.maskify("1")).toBe("1"); // escribe aquí tu test
        });

        it('Debería retornar "######orld" para "helloworld"', () => {
            expect(validator.maskify("helloworld")).toBe("######orld"); // escribe aquí tu test
        });
    });
    describe('validator.getIssuer', () => {
        it('debería ser una función', () => {
            expect(typeof validator.getIssuer).toBe('function');
        });

        it('Debería retornar "Visa" para "4556364607935616"', () => {
            expect(validator.getIssuer("4556364607935616")).toBe("Visa"); // escribe aquí tu test
        });

        it('Debería retornar "" para "1"', () => {
            expect(validator.getIssuer("1")).toBe(""); // escribe aquí tu test
        });

        it('Debería retornar "MasterCard" para "5556364607935616"', () => {
            expect(validator.getIssuer("5556364607935616")).toBe("MasterCard"); // escribe aquí tu test
        });
    });
});