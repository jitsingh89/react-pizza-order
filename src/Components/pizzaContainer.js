import React, {Component} from 'react';
import Pizza from './Pizza';
import { connect } from 'react-redux';
import { addCart ,initPizza } from '../redux/action';
import PropTypes from 'prop-types';

class PizzaContainer extends Component{

    static propTypes = {
        onSave: PropTypes.func.isRequired,       
        pizzas: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                description: PropTypes.string,
                price: PropTypes.number,
                id: PropTypes.number,
            })
          ),
    }
        
    componentDidMount () {
        this.props.onInitPizza();
    }

    render(){
        const { onSave ,pizzas} = this.props;
        return ( 
            <div className="container">
                <div className = "row">
                    {pizzas.map((item, index) => (
                        <Pizza item={item} addPizza = { onSave } />
                    ))}
                </div>}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        pizzas : state.pizza,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: (pizza) => dispatch(addCart(pizza)),
        onInitPizza: () => dispatch(initPizza()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
