package Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Modal.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
