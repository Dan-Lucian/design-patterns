import runPattern from './utils';
import AbstractFactory from './modules/creational/abstract-factory/AbstractFactory';
import FactoryMethod from './modules/creational/factory-method/FactoryMethod';
import Builder from './modules/creational/builder/Builder';
import Prototype from './modules/creational/prototype/Prototype';
import Singleton from './modules/creational/singleton/Singleton';
import Adapter from './modules/structural/adapter/Adapter';
import Bridge from './modules/structural/bridge/Bridge';
import Composite from './modules/structural/composite/Composite';
import Decorator from './modules/structural/decorator/Decorator';
import Facade from './modules/structural/facade/Facade';
import Flyweight from './modules/structural/flyweight/Flyweight';
import Proxy from './modules/structural/proxy/Proxy';

console.clear();

// Creational patterns
runPattern('Factory Method', new FactoryMethod());
runPattern('Abstract Factory', new AbstractFactory('mac'));
runPattern('Builder', new Builder());
runPattern('Prototype', new Prototype());
runPattern('Singleton', new Singleton());

// Structural patterns
runPattern('Adapter', new Adapter());
runPattern('Bridge', new Bridge());
runPattern('Composite', new Composite());
runPattern('Decorator', new Decorator());
runPattern('Facade', new Facade());
runPattern('Flyweight', new Flyweight());
runPattern('Proxy', new Proxy());

// Behavioral patterns
