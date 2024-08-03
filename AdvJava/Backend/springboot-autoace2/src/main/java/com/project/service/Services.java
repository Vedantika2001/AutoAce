
package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Admin;
import com.project.entity.ServiceTable;
import com.project.exception.ServiceException;
import com.project.repository.AdminRepository;
import com.project.repository.ServiceRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class Services {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private AdminRepository adminRepository;

    
    //Add servicing 
    public ServiceTable addService(ServiceTable serviceTable) {
    	System.out.println("start");
    	System.out.println(serviceTable.getName());
        try {
           Admin admin = serviceTable.getAdmin();
           System.out.println(admin + "jhhdkjhd");
            if (admin != null) {
            	System.out.println(admin.getId() + "not null");
                // Check if the Admin exists in the database
                if (admin.getId() != 0) {
                    Optional<Admin> existingAdmin = adminRepository.findById(admin.getId());
                    
                    System.out.println(admin.getId() + "inside not null");
                    
                    if (existingAdmin.isPresent()) {
                    	System.out.println(existingAdmin.isPresent() +"  inside is exist");
                        admin = existingAdmin.get();
                    } else {
                        throw new ServiceException("Admin not found in the database");
                    }
                }
                System.out.println("outside not null");
                // Set bidirectional relationship
               admin.getServiceTable().add(serviceTable);
                serviceTable.setAdmin(admin);

                // Save the service and the updated admin
                serviceRepository.save(serviceTable);

                return serviceTable;
            } else {
               throw new ServiceException("Admin is required for adding a service");
          }
        } catch (ServiceException e) {
            throw new ServiceException("Error while adding services", e);
        }
    }
    
    
//    public ServiceTable addService(ServiceTable serviceTable , int adminId) {
//        try {
//            Optional<Admin> admin = adminRepository.findById(adminId);
//            Admin existingAdmin = admin.get();
//            
//                serviceTable.setAdmin(existingAdmin);
//
//                // Save the service and the updated admin
//                serviceRepository.save(serviceTable);
//
//                return serviceTable;
//       } catch (ServiceException e) {
//            throw new ServiceException("Error while adding services", e);
//        }
//    }
   
    
    
    //fetch all services
    
    public List<ServiceTable> fetchAll(){
    	try {
    		return serviceRepository.findAll();
    	}
    	catch(ServiceException e) {
    		throw new ServiceException("Error while fetching services", e);
    	}
    }
    
    //delete by id
    public void deleteServiceById(int serviceId) {
    	try {
            // Check if the service exists in the database
            if (serviceRepository.existsById(serviceId)) {
                // Delete the service by ID
                serviceRepository.deleteById(serviceId);
            } else {
                throw new ServiceException("Service not found with ID: " + serviceId);
            }
        } catch (ServiceException e) {
            throw new ServiceException("Error while deleting service", e);
        }
    }
    
    
    //update by id
    public ServiceTable updateService(int serviceId, ServiceTable updatedService) {
        try {
            // Find the existing service in the database
            ServiceTable existingService = serviceRepository.findById(serviceId)
                    .orElseThrow(() -> new ServiceException("Service not found"));

            // Update service details
            existingService.setName(updatedService.getName());
            existingService.setServiceDesc(updatedService.getServiceDesc());
            existingService.setPrice(updatedService.getPrice());

            // Update the relationship with Admin
            Admin admin = updatedService.getAdmin();
            if (admin != null && admin.getId() != 0) {
                Optional<Admin> existingAdmin = adminRepository.findById(admin.getId());
                if (existingAdmin.isPresent()) {
                    admin = existingAdmin.get();
                } else {
                    throw new ServiceException("Admin not found in the database");
                }
            }

            // Set bidirectional relationship
            existingService.setAdmin(admin);

            // Save the updated service
            serviceRepository.save(existingService);

            return existingService;
        } catch (ServiceException e) {
            throw new ServiceException("Error while updating service", e);
        }
    }
}

