import { connect } from 'react-redux'
import AddListing from '../components/AddListing'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        map: state.map
    }
}

export default connect(mapStateToProps)(AddListing)